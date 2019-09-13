import json
from os.path import join

ref_dir = '../media/reference_imgs'
metamer_dir = '../media/metamer_imgs'

imgs = range(1, 6+1)
scales = [0.3, 0.4, 0.5, 0.6, 0.7]
flipped = [False, True]
thirds = ['first', 'second']

# create the trial list
data = []

for img in imgs:
    for scale in scales:
        for flip in flipped:
            for third in thirds:
                if not flip:
                    data.append({'first': join(ref_dir, '{:02d}.png'.format(img)),
                                           'second': join(metamer_dir,
                                                          '{:02d}_s{:.1f}_a2_o0.5_iter_50.png'.format(img, scale)),
                                           'third': third})
                else:
                    data.append({'first': join(metamer_dir,
                                                         '{:02d}_s{:.1f}_a2_o0.5_iter_50.png'.format(img, scale)),
                                           'second': join(ref_dir, '{:02d}.png'.format(img)),
                                           'third': third})

with open('experiment_trials.js', 'w') as outfile:
    outfile.write('var EXPERIMENT_TRIALS =\n'+json.dumps(data, indent=4))
