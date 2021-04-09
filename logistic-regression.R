# libraries
library(tidymodels)
library(tidyverse)

set.seed(42)

# read data in
ufc_data <- read_csv("processed_data/ufc_data.csv")

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
multi = lm(formula = result ~ ., data = prepped_train_data)
y_pred_m = predict(multi, newdata = prepped_test_data)
summarise(y_pred_m)
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
