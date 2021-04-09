# libraries
library(tidymodels)
library(tidyverse)

library(glmnet)
set.seed(42)

# read data in
ufc_data <- read_csv("https://github.com/cole-tucker/ufc-prediction/blob/05f88e882a96914a80ec2cf121dc58e8ce6e656f/ufc_data.csv")

############################## PREP DATA ################
data_split <- rsample::initial_split(data = ufc_data,
                                     prop = .8)

# create each data set
train_data <- training(data_split)
test_data <- testing(data_split)
glimpse(train_data)
# now create a recipe
my_recipe <- recipe(result ~ reach + stance + wins + loss + splm + sig_acc + sig_absorbed + sig_strike_defense + average_takedown + takedown_acc + takedown_defense + sub_average, 
                    data = train_data) %>%
  step_scale(reach, stance, wins, loss, splm, sig_acc, sig_absorbed, sig_strike_defense, average_takedown, takedown_acc, takedown_defense, sub_average) %>%
  prep()

# apply recipe
prepped_train_data <- juice(my_recipe)
prepped_test_data <- bake(my_recipe, test_data)

##################### LOGISTIC REGRESSION ############
# define a GLMNET
glmnet_model <- logistic_reg(penalty = .01) %>%
  set_engine("glmnet")

# train model
my_glm_model <- glmnet_model %>%
  fit(result ~ ., data = prepped_train_data)

# predictions per observation in test data
my_glm_model %>%
  predict(new_data = test_data)

# precision
my_glm_model %>%
  predict(new_data = test_data) %>%
  mutate(truth = test_data$result) %>%
  precision(factor(truth), .pred_class)

#################### DECISION TREE ##############

library(rpart.plot)

fight_tree <- rpart(result ~ . ,data = prepped_train_data)
fight_tree$variable.importance
rpart.plot(fight_tree)


library(randomForest)

rf_train <- randomForest(result ~ ., data = prepped_train_data, mtry = 4, na.action = na.roughfix)
importance(rf_train)

#################### CLASSIFICATION ################
library(caret)
library(RANN)
library(e1071)

ufc_nodate <- ufc_data %>%
  select(-Date,-Event,-City,-State,-Country,-fighter,-WeightClass,-Round,-Method)
ufc_nodate$result <-  factor(ifelse(ufc_data$result == 'winner', 1, 0))
ufc_split <- createDataPartition(ufc_nodate$result, p = 0.8, list = FALSE)

features_train <- ufc_nodate[ ufc_split, !(names(ufc_nodate) %in% c('result'))] 
features_test  <- ufc_nodate[-ufc_split, !(names(ufc_nodate) %in% c('result'))]
target_train <- ufc_nodate[ ufc_split, "result"]
target_test <- ufc_nodate[-ufc_split, "result"]

preprocess_object <- preProcess(features_train, 
                                method = c('center', 'scale'))
preprocess_object

features_train <- predict(preprocess_object, newdata = features_train)
features_test <- predict(preprocess_object, newdata = features_test)

target_train
knn_fit <- knn3(features_train, target_train$result, k = 5)
knn_fit

knn_pred <- predict(knn_fit, features_test, type = 'class' )
