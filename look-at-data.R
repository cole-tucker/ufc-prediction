library(tidyverse)

ufc_data <- read_csv("https://raw.githubusercontent.com/cole-tucker/ufc-prediction/seamus/fighter_events_clean%20(1).csv")


figther_one <- ufc_data %>%
  select(fighter1:sub_average_x)

figther_two <- ufc_data %>%
  select(fighter2:sub_average_y)

colnames(figther_one) <- c("fighter", "reach", "stance",
                           "wins", "loss", "no_contest",
                           "splm", "sig_acc", "sig_absorbed",
                           "sig_strike_defense", "average_takedown",
                           "takedown_acc", "takedown_defense", "sub_average")

colnames(figther_two) <- c("fighter", "reach", "stance",
                           "wins", "loss", "no_contest",
                           "splm", "sig_acc", "sig_absorbed",
                           "sig_strike_defense", "average_takedown",
                           "takedown_acc", "takedown_defense", "sub_average")

fighter_info <- bind_rows(figther_one,
                          figther_two) %>%
  unique()

fight_info_loser <- ufc_data %>%
  select(Date:Method, -Winner) %>%
  mutate(result = "loser") %>%
  rename(fighter = Loser)

fight_info_winner <- ufc_data %>%
  select(Date:Method, -Loser) %>%
  mutate(result = "winner") %>%
  rename(fighter = Winner)

fight_info <- bind_rows(fight_info_loser,
                        fight_info_winner)

all_data <- left_join(fight_info, fighter_info)

all_data %>%
  group_by(X1) %>%
  summarize(diff_splm = diff(splm))
  ggplot(aes(x = Event,
             y = average_takedown,
             color = result)) +
  geom_point() +
  geom_smooth(method = "lm")

write_csv(all_data, "processed_data/ufc_data.csv")
