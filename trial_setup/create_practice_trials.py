import json
from os.path import join
from random import shuffle, choice

img_source_dir = '../media'

imgs = [7, 8]
scale_pairs = [[0.3, 0.4],  # 0 means original
               [0.3, 0.5]]

# create the trial list
data = []

for img in imgs:
    for scale_pair in scale_pairs:
        shuffle(scale_pair)
        if choice([True, False]):
            third = 'first'
        else:
            third = 'second'
        data.append({'first': join(img_source_dir, 'metamer_imgs/{:02d}_s{:.1f}_a2_o0.5_iter_50.png'.format(img, scale_pair[0])),
                     'second': join(img_source_dir, 'metamer_imgs/{:02d}_s{:.1f}_a2_o0.5_iter_50.png'.format(img, scale_pair[1])),
                     'third': third})

with open('practice_trials.js', 'w') as outfile:
    outfile.write('var PRACTICE_TRIALS =\n'+json.dumps(data, indent=4))
