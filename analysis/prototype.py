import pandas as pd
import seaborn as sns
import os
import matplotlib as mpl
mpl.use('Agg')
import matplotlib.pyplot as plt

data_dir = "data"

# load data into dataframe
csv_files = os.listdir("./data")
df = pd.DataFrame()

first_relevant_trial = 5

# read csv files into pandas Dataframe
for csv_file in csv_files:
    data = pd.read_csv(os.path.join(data_dir, csv_file))
    data = data[(data.sender == "response") & (data.trialIdx >= first_relevant_trial)]
    scale_list = []
    for idx, row in data.iterrows():
        if "metamer" in row["first"]:
            target = "first"
        else:
            target = "second"
        scale_list.append(float(str.split(str.split(row[target], "/")[-1], "_")[1][1:]))
    data["scale"] = pd.Series(scale_list, index=data.index)
    data["subject"] = str.split(csv_file, ".")[0]
    df = df.append(data)

# determine accuracy per subject and scale level
df.correct = df.correct.astype(int)
df = df.groupby(['subject', 'scale'], as_index=False)['correct'].mean()

# plot with seaborn
f, ax = plt.subplots(figsize=(6.5, 6.5))
sns.scatterplot(x="scale", y="correct", hue="subject", data=df, ax=ax)
f.savefig("results.png")
