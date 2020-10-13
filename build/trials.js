
function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}


//  Preload images

var images = new Array()
function preload() {
    for (i = 0; i < preload.arguments.length; i++) {
        images[i] = new Image()
        images[i].src = preload.arguments[i]
    }
}
preload(
    "media/reference_imgs/01.png",
    "media/reference_imgs/02.png",
    "media/reference_imgs/03.png",
    "media/reference_imgs/04.png",
    "media/reference_imgs/05.png",
    "media/reference_imgs/06.png",
    "media/reference_imgs/07.png",
    "media/reference_imgs/08.png",
    "media/reference_imgs/09.png",
    "media/reference_imgs/10.png",
    "media/metamer_imgs/01_s0.3_a2_o0.5_iter_50.png",
    "media/metamer_imgs/01_s0.4_a2_o0.5_iter_50.png",
    "media/metamer_imgs/01_s0.5_a2_o0.5_iter_50.png",
    "media/metamer_imgs/01_s0.6_a2_o0.5_iter_50.png",
    "media/metamer_imgs/01_s0.7_a2_o0.5_iter_50.png",
    "media/metamer_imgs/02_s0.3_a2_o0.5_iter_50.png",
    "media/metamer_imgs/02_s0.4_a2_o0.5_iter_50.png",
    "media/metamer_imgs/02_s0.5_a2_o0.5_iter_50.png",
    "media/metamer_imgs/02_s0.6_a2_o0.5_iter_50.png",
    "media/metamer_imgs/02_s0.7_a2_o0.5_iter_50.png",
    "media/metamer_imgs/03_s0.3_a2_o0.5_iter_50.png",
    "media/metamer_imgs/03_s0.4_a2_o0.5_iter_50.png",
    "media/metamer_imgs/03_s0.5_a2_o0.5_iter_50.png",
    "media/metamer_imgs/03_s0.6_a2_o0.5_iter_50.png",
    "media/metamer_imgs/03_s0.7_a2_o0.5_iter_50.png",
    "media/metamer_imgs/04_s0.3_a2_o0.5_iter_50.png",
    "media/metamer_imgs/04_s0.4_a2_o0.5_iter_50.png",
    "media/metamer_imgs/04_s0.5_a2_o0.5_iter_50.png",
    "media/metamer_imgs/04_s0.6_a2_o0.5_iter_50.png",
    "media/metamer_imgs/04_s0.7_a2_o0.5_iter_50.png",
    "media/metamer_imgs/05_s0.3_a2_o0.5_iter_50.png",
    "media/metamer_imgs/05_s0.4_a2_o0.5_iter_50.png",
    "media/metamer_imgs/05_s0.5_a2_o0.5_iter_50.png",
    "media/metamer_imgs/05_s0.6_a2_o0.5_iter_50.png",
    "media/metamer_imgs/05_s0.7_a2_o0.5_iter_50.png",
    "media/metamer_imgs/06_s0.3_a2_o0.5_iter_50.png",
    "media/metamer_imgs/06_s0.4_a2_o0.5_iter_50.png",
    "media/metamer_imgs/06_s0.5_a2_o0.5_iter_50.png",
    "media/metamer_imgs/06_s0.6_a2_o0.5_iter_50.png",
    "media/metamer_imgs/06_s0.7_a2_o0.5_iter_50.png",
    "media/metamer_imgs/07_s0.3_a2_o0.5_iter_50.png",
    "media/metamer_imgs/07_s0.4_a2_o0.5_iter_50.png",
    "media/metamer_imgs/07_s0.5_a2_o0.5_iter_50.png",
    "media/metamer_imgs/07_s0.6_a2_o0.5_iter_50.png",
    "media/metamer_imgs/07_s0.7_a2_o0.5_iter_50.png",
    "media/metamer_imgs/08_s0.3_a2_o0.5_iter_50.png",
    "media/metamer_imgs/08_s0.4_a2_o0.5_iter_50.png",
    "media/metamer_imgs/08_s0.5_a2_o0.5_iter_50.png",
    "media/metamer_imgs/08_s0.6_a2_o0.5_iter_50.png",
    "media/metamer_imgs/08_s0.7_a2_o0.5_iter_50.png",
    "media/metamer_imgs/09_s0.3_a2_o0.5_iter_50.png",
    "media/metamer_imgs/09_s0.4_a2_o0.5_iter_50.png",
    "media/metamer_imgs/09_s0.5_a2_o0.5_iter_50.png",
    "media/metamer_imgs/09_s0.6_a2_o0.5_iter_50.png",
    "media/metamer_imgs/09_s0.7_a2_o0.5_iter_50.png",
    "media/metamer_imgs/10_s0.3_a2_o0.5_iter_50.png",
    "media/metamer_imgs/10_s0.4_a2_o0.5_iter_50.png",
    "media/metamer_imgs/10_s0.5_a2_o0.5_iter_50.png",
    "media/metamer_imgs/10_s0.6_a2_o0.5_iter_50.png",
    "media/metamer_imgs/10_s0.7_a2_o0.5_iter_50.png");

console.log(images);


//  Declare the trial list for practice a"nd experiment trials
var PRACTICE_TRIALS =
[
    {
        "first": "media/metamer_imgs/07_s0.3_a2_o0.5_iter_50.png",
        "second": "media/metamer_imgs/07_s0.4_a2_o0.5_iter_50.png",
        "third": "second"
    },
    {
        "first": "media/metamer_imgs/07_s0.5_a2_o0.5_iter_50.png",
        "second": "media/metamer_imgs/07_s0.3_a2_o0.5_iter_50.png",
        "third": "first"
    },
    {
        "first": "media/metamer_imgs/08_s0.4_a2_o0.5_iter_50.png",
        "second": "media/metamer_imgs/08_s0.3_a2_o0.5_iter_50.png",
        "third": "first"
    },
    {
        "first": "media/metamer_imgs/08_s0.5_a2_o0.5_iter_50.png",
        "second": "media/metamer_imgs/08_s0.3_a2_o0.5_iter_50.png",
        "third": "first"
    }
]
shuffle(PRACTICE_TRIALS);

var EXPERIMENT_TRIALS =
[
    {
        "first": "media/reference_imgs/01.png",
        "second": "media/metamer_imgs/01_s0.3_a2_o0.5_iter_50.png",
        "third": "first"
    },
    {
        "first": "media/reference_imgs/01.png",
        "second": "media/metamer_imgs/01_s0.3_a2_o0.5_iter_50.png",
        "third": "second"
    },
    {
        "first": "media/metamer_imgs/01_s0.3_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/01.png",
        "third": "first"
    },
    {
        "first": "media/metamer_imgs/01_s0.3_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/01.png",
        "third": "second"
    },
    {
        "first": "media/reference_imgs/01.png",
        "second": "media/metamer_imgs/01_s0.4_a2_o0.5_iter_50.png",
        "third": "first"
    },
    {
        "first": "media/reference_imgs/01.png",
        "second": "media/metamer_imgs/01_s0.4_a2_o0.5_iter_50.png",
        "third": "second"
    },
    {
        "first": "media/metamer_imgs/01_s0.4_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/01.png",
        "third": "first"
    },
    {
        "first": "media/metamer_imgs/01_s0.4_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/01.png",
        "third": "second"
    },
    {
        "first": "media/reference_imgs/01.png",
        "second": "media/metamer_imgs/01_s0.5_a2_o0.5_iter_50.png",
        "third": "first"
    },
    {
        "first": "media/reference_imgs/01.png",
        "second": "media/metamer_imgs/01_s0.5_a2_o0.5_iter_50.png",
        "third": "second"
    },
    {
        "first": "media/metamer_imgs/01_s0.5_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/01.png",
        "third": "first"
    },
    {
        "first": "media/metamer_imgs/01_s0.5_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/01.png",
        "third": "second"
    },
    {
        "first": "media/reference_imgs/01.png",
        "second": "media/metamer_imgs/01_s0.6_a2_o0.5_iter_50.png",
        "third": "first"
    },
    {
        "first": "media/reference_imgs/01.png",
        "second": "media/metamer_imgs/01_s0.6_a2_o0.5_iter_50.png",
        "third": "second"
    },
    {
        "first": "media/metamer_imgs/01_s0.6_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/01.png",
        "third": "first"
    },
    {
        "first": "media/metamer_imgs/01_s0.6_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/01.png",
        "third": "second"
    },
    {
        "first": "media/reference_imgs/01.png",
        "second": "media/metamer_imgs/01_s0.7_a2_o0.5_iter_50.png",
        "third": "first"
    },
    {
        "first": "media/reference_imgs/01.png",
        "second": "media/metamer_imgs/01_s0.7_a2_o0.5_iter_50.png",
        "third": "second"
    },
    {
        "first": "media/metamer_imgs/01_s0.7_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/01.png",
        "third": "first"
    },
    {
        "first": "media/metamer_imgs/01_s0.7_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/01.png",
        "third": "second"
    },
    {
        "first": "media/reference_imgs/02.png",
        "second": "media/metamer_imgs/02_s0.3_a2_o0.5_iter_50.png",
        "third": "first"
    },
    {
        "first": "media/reference_imgs/02.png",
        "second": "media/metamer_imgs/02_s0.3_a2_o0.5_iter_50.png",
        "third": "second"
    },
    {
        "first": "media/metamer_imgs/02_s0.3_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/02.png",
        "third": "first"
    },
    {
        "first": "media/metamer_imgs/02_s0.3_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/02.png",
        "third": "second"
    },
    {
        "first": "media/reference_imgs/02.png",
        "second": "media/metamer_imgs/02_s0.4_a2_o0.5_iter_50.png",
        "third": "first"
    },
    {
        "first": "media/reference_imgs/02.png",
        "second": "media/metamer_imgs/02_s0.4_a2_o0.5_iter_50.png",
        "third": "second"
    },
    {
        "first": "media/metamer_imgs/02_s0.4_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/02.png",
        "third": "first"
    },
    {
        "first": "media/metamer_imgs/02_s0.4_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/02.png",
        "third": "second"
    },
    {
        "first": "media/reference_imgs/02.png",
        "second": "media/metamer_imgs/02_s0.5_a2_o0.5_iter_50.png",
        "third": "first"
    },
    {
        "first": "media/reference_imgs/02.png",
        "second": "media/metamer_imgs/02_s0.5_a2_o0.5_iter_50.png",
        "third": "second"
    },
    {
        "first": "media/metamer_imgs/02_s0.5_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/02.png",
        "third": "first"
    },
    {
        "first": "media/metamer_imgs/02_s0.5_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/02.png",
        "third": "second"
    },
    {
        "first": "media/reference_imgs/02.png",
        "second": "media/metamer_imgs/02_s0.6_a2_o0.5_iter_50.png",
        "third": "first"
    },
    {
        "first": "media/reference_imgs/02.png",
        "second": "media/metamer_imgs/02_s0.6_a2_o0.5_iter_50.png",
        "third": "second"
    },
    {
        "first": "media/metamer_imgs/02_s0.6_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/02.png",
        "third": "first"
    },
    {
        "first": "media/metamer_imgs/02_s0.6_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/02.png",
        "third": "second"
    },
    {
        "first": "media/reference_imgs/02.png",
        "second": "media/metamer_imgs/02_s0.7_a2_o0.5_iter_50.png",
        "third": "first"
    },
    {
        "first": "media/reference_imgs/02.png",
        "second": "media/metamer_imgs/02_s0.7_a2_o0.5_iter_50.png",
        "third": "second"
    },
    {
        "first": "media/metamer_imgs/02_s0.7_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/02.png",
        "third": "first"
    },
    {
        "first": "media/metamer_imgs/02_s0.7_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/02.png",
        "third": "second"
    },
    {
        "first": "media/reference_imgs/03.png",
        "second": "media/metamer_imgs/03_s0.3_a2_o0.5_iter_50.png",
        "third": "first"
    },
    {
        "first": "media/reference_imgs/03.png",
        "second": "media/metamer_imgs/03_s0.3_a2_o0.5_iter_50.png",
        "third": "second"
    },
    {
        "first": "media/metamer_imgs/03_s0.3_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/03.png",
        "third": "first"
    },
    {
        "first": "media/metamer_imgs/03_s0.3_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/03.png",
        "third": "second"
    },
    {
        "first": "media/reference_imgs/03.png",
        "second": "media/metamer_imgs/03_s0.4_a2_o0.5_iter_50.png",
        "third": "first"
    },
    {
        "first": "media/reference_imgs/03.png",
        "second": "media/metamer_imgs/03_s0.4_a2_o0.5_iter_50.png",
        "third": "second"
    },
    {
        "first": "media/metamer_imgs/03_s0.4_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/03.png",
        "third": "first"
    },
    {
        "first": "media/metamer_imgs/03_s0.4_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/03.png",
        "third": "second"
    },
    {
        "first": "media/reference_imgs/03.png",
        "second": "media/metamer_imgs/03_s0.5_a2_o0.5_iter_50.png",
        "third": "first"
    },
    {
        "first": "media/reference_imgs/03.png",
        "second": "media/metamer_imgs/03_s0.5_a2_o0.5_iter_50.png",
        "third": "second"
    },
    {
        "first": "media/metamer_imgs/03_s0.5_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/03.png",
        "third": "first"
    },
    {
        "first": "media/metamer_imgs/03_s0.5_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/03.png",
        "third": "second"
    },
    {
        "first": "media/reference_imgs/03.png",
        "second": "media/metamer_imgs/03_s0.6_a2_o0.5_iter_50.png",
        "third": "first"
    },
    {
        "first": "media/reference_imgs/03.png",
        "second": "media/metamer_imgs/03_s0.6_a2_o0.5_iter_50.png",
        "third": "second"
    },
    {
        "first": "media/metamer_imgs/03_s0.6_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/03.png",
        "third": "first"
    },
    {
        "first": "media/metamer_imgs/03_s0.6_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/03.png",
        "third": "second"
    },
    {
        "first": "media/reference_imgs/03.png",
        "second": "media/metamer_imgs/03_s0.7_a2_o0.5_iter_50.png",
        "third": "first"
    },
    {
        "first": "media/reference_imgs/03.png",
        "second": "media/metamer_imgs/03_s0.7_a2_o0.5_iter_50.png",
        "third": "second"
    },
    {
        "first": "media/metamer_imgs/03_s0.7_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/03.png",
        "third": "first"
    },
    {
        "first": "media/metamer_imgs/03_s0.7_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/03.png",
        "third": "second"
    },
    {
        "first": "media/reference_imgs/04.png",
        "second": "media/metamer_imgs/04_s0.3_a2_o0.5_iter_50.png",
        "third": "first"
    },
    {
        "first": "media/reference_imgs/04.png",
        "second": "media/metamer_imgs/04_s0.3_a2_o0.5_iter_50.png",
        "third": "second"
    },
    {
        "first": "media/metamer_imgs/04_s0.3_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/04.png",
        "third": "first"
    },
    {
        "first": "media/metamer_imgs/04_s0.3_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/04.png",
        "third": "second"
    },
    {
        "first": "media/reference_imgs/04.png",
        "second": "media/metamer_imgs/04_s0.4_a2_o0.5_iter_50.png",
        "third": "first"
    },
    {
        "first": "media/reference_imgs/04.png",
        "second": "media/metamer_imgs/04_s0.4_a2_o0.5_iter_50.png",
        "third": "second"
    },
    {
        "first": "media/metamer_imgs/04_s0.4_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/04.png",
        "third": "first"
    },
    {
        "first": "media/metamer_imgs/04_s0.4_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/04.png",
        "third": "second"
    },
    {
        "first": "media/reference_imgs/04.png",
        "second": "media/metamer_imgs/04_s0.5_a2_o0.5_iter_50.png",
        "third": "first"
    },
    {
        "first": "media/reference_imgs/04.png",
        "second": "media/metamer_imgs/04_s0.5_a2_o0.5_iter_50.png",
        "third": "second"
    },
    {
        "first": "media/metamer_imgs/04_s0.5_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/04.png",
        "third": "first"
    },
    {
        "first": "media/metamer_imgs/04_s0.5_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/04.png",
        "third": "second"
    },
    {
        "first": "media/reference_imgs/04.png",
        "second": "media/metamer_imgs/04_s0.6_a2_o0.5_iter_50.png",
        "third": "first"
    },
    {
        "first": "media/reference_imgs/04.png",
        "second": "media/metamer_imgs/04_s0.6_a2_o0.5_iter_50.png",
        "third": "second"
    },
    {
        "first": "media/metamer_imgs/04_s0.6_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/04.png",
        "third": "first"
    },
    {
        "first": "media/metamer_imgs/04_s0.6_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/04.png",
        "third": "second"
    },
    {
        "first": "media/reference_imgs/04.png",
        "second": "media/metamer_imgs/04_s0.7_a2_o0.5_iter_50.png",
        "third": "first"
    },
    {
        "first": "media/reference_imgs/04.png",
        "second": "media/metamer_imgs/04_s0.7_a2_o0.5_iter_50.png",
        "third": "second"
    },
    {
        "first": "media/metamer_imgs/04_s0.7_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/04.png",
        "third": "first"
    },
    {
        "first": "media/metamer_imgs/04_s0.7_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/04.png",
        "third": "second"
    },
    {
        "first": "media/reference_imgs/05.png",
        "second": "media/metamer_imgs/05_s0.3_a2_o0.5_iter_50.png",
        "third": "first"
    },
    {
        "first": "media/reference_imgs/05.png",
        "second": "media/metamer_imgs/05_s0.3_a2_o0.5_iter_50.png",
        "third": "second"
    },
    {
        "first": "media/metamer_imgs/05_s0.3_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/05.png",
        "third": "first"
    },
    {
        "first": "media/metamer_imgs/05_s0.3_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/05.png",
        "third": "second"
    },
    {
        "first": "media/reference_imgs/05.png",
        "second": "media/metamer_imgs/05_s0.4_a2_o0.5_iter_50.png",
        "third": "first"
    },
    {
        "first": "media/reference_imgs/05.png",
        "second": "media/metamer_imgs/05_s0.4_a2_o0.5_iter_50.png",
        "third": "second"
    },
    {
        "first": "media/metamer_imgs/05_s0.4_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/05.png",
        "third": "first"
    },
    {
        "first": "media/metamer_imgs/05_s0.4_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/05.png",
        "third": "second"
    },
    {
        "first": "media/reference_imgs/05.png",
        "second": "media/metamer_imgs/05_s0.5_a2_o0.5_iter_50.png",
        "third": "first"
    },
    {
        "first": "media/reference_imgs/05.png",
        "second": "media/metamer_imgs/05_s0.5_a2_o0.5_iter_50.png",
        "third": "second"
    },
    {
        "first": "media/metamer_imgs/05_s0.5_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/05.png",
        "third": "first"
    },
    {
        "first": "media/metamer_imgs/05_s0.5_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/05.png",
        "third": "second"
    },
    {
        "first": "media/reference_imgs/05.png",
        "second": "media/metamer_imgs/05_s0.6_a2_o0.5_iter_50.png",
        "third": "first"
    },
    {
        "first": "media/reference_imgs/05.png",
        "second": "media/metamer_imgs/05_s0.6_a2_o0.5_iter_50.png",
        "third": "second"
    },
    {
        "first": "media/metamer_imgs/05_s0.6_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/05.png",
        "third": "first"
    },
    {
        "first": "media/metamer_imgs/05_s0.6_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/05.png",
        "third": "second"
    },
    {
        "first": "media/reference_imgs/05.png",
        "second": "media/metamer_imgs/05_s0.7_a2_o0.5_iter_50.png",
        "third": "first"
    },
    {
        "first": "media/reference_imgs/05.png",
        "second": "media/metamer_imgs/05_s0.7_a2_o0.5_iter_50.png",
        "third": "second"
    },
    {
        "first": "media/metamer_imgs/05_s0.7_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/05.png",
        "third": "first"
    },
    {
        "first": "media/metamer_imgs/05_s0.7_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/05.png",
        "third": "second"
    },
    {
        "first": "media/reference_imgs/06.png",
        "second": "media/metamer_imgs/06_s0.3_a2_o0.5_iter_50.png",
        "third": "first"
    },
    {
        "first": "media/reference_imgs/06.png",
        "second": "media/metamer_imgs/06_s0.3_a2_o0.5_iter_50.png",
        "third": "second"
    },
    {
        "first": "media/metamer_imgs/06_s0.3_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/06.png",
        "third": "first"
    },
    {
        "first": "media/metamer_imgs/06_s0.3_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/06.png",
        "third": "second"
    },
    {
        "first": "media/reference_imgs/06.png",
        "second": "media/metamer_imgs/06_s0.4_a2_o0.5_iter_50.png",
        "third": "first"
    },
    {
        "first": "media/reference_imgs/06.png",
        "second": "media/metamer_imgs/06_s0.4_a2_o0.5_iter_50.png",
        "third": "second"
    },
    {
        "first": "media/metamer_imgs/06_s0.4_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/06.png",
        "third": "first"
    },
    {
        "first": "media/metamer_imgs/06_s0.4_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/06.png",
        "third": "second"
    },
    {
        "first": "media/reference_imgs/06.png",
        "second": "media/metamer_imgs/06_s0.5_a2_o0.5_iter_50.png",
        "third": "first"
    },
    {
        "first": "media/reference_imgs/06.png",
        "second": "media/metamer_imgs/06_s0.5_a2_o0.5_iter_50.png",
        "third": "second"
    },
    {
        "first": "media/metamer_imgs/06_s0.5_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/06.png",
        "third": "first"
    },
    {
        "first": "media/metamer_imgs/06_s0.5_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/06.png",
        "third": "second"
    },
    {
        "first": "media/reference_imgs/06.png",
        "second": "media/metamer_imgs/06_s0.6_a2_o0.5_iter_50.png",
        "third": "first"
    },
    {
        "first": "media/reference_imgs/06.png",
        "second": "media/metamer_imgs/06_s0.6_a2_o0.5_iter_50.png",
        "third": "second"
    },
    {
        "first": "media/metamer_imgs/06_s0.6_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/06.png",
        "third": "first"
    },
    {
        "first": "media/metamer_imgs/06_s0.6_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/06.png",
        "third": "second"
    },
    {
        "first": "media/reference_imgs/06.png",
        "second": "media/metamer_imgs/06_s0.7_a2_o0.5_iter_50.png",
        "third": "first"
    },
    {
        "first": "media/reference_imgs/06.png",
        "second": "media/metamer_imgs/06_s0.7_a2_o0.5_iter_50.png",
        "third": "second"
    },
    {
        "first": "media/metamer_imgs/06_s0.7_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/06.png",
        "third": "first"
    },
    {
        "first": "media/metamer_imgs/06_s0.7_a2_o0.5_iter_50.png",
        "second": "media/reference_imgs/06.png",
        "third": "second"
    }
]
shuffle(EXPERIMENT_TRIALS);
