/*jshint esversion: 6 */

const preview = [
  {
    'num': 10,
    'title': 'Logan',
    'desc': "He's the best at what he does...and what he does is get super-old, grey and wrinkly." 
  },
  {
    'num': 14,
    'title': 'Beauty and the Beast',
    'desc': 'Guess which one Emma Watson is?'
  },
  {
    'num': 16,
    'title': 'Fences',
    'desc': "Denzel Washington won an award back when this was a play. Can he win another now that it's a movie"
  },
  {
    'num': 20,
    'title': 'Gillian Anderson',
    'desc': 'How is it that Scully looks wonderful with each passing year, while we fall to bits?'
  },
  {
    'num': 24,
    'title': 'Ghost in the Shell',
    'desc': "That's what happens when oysters die."
  }
];

const onscreen = [
  {
    'num': 28,
    'movie': [
      {
        'title': 'Manchester by the Sea',
        'rating': 5
      }
    ]
  },
  {
    'num': 30,
    'movie': [
      {
        'title': 'Collateral Beauty',
        'rating': 2
      },
      {
        'title': 'Moonlight',
        'rating': 4
      }
    ]
  },
  {
    'num': 31,
    'movie': [
      {
        'title': 'Lion',
        'rating': 4
      }
    ]
  },
  {
    'num': 32,
    'movie': [
      {
        'title': 'Rogue One',
        'rating': 4
      }
    ]
  },
  {
    'num': 34,
    'movie': [
      {
        'title': 'A Monster Calls',
        'rating': 4
      }
    ]
  },
  {
    'num': 35,
    'movie': [
      {
        'title': 'Monster Trucks',
        'rating': 2
      },
      {
        'title': "Rules Don't Apply",
        'rating': 2
      },
      {
        'title': 'Split',
        'rating': 4
      }
    ]
  },
  {
    'num': 36,
    'movie': [
      {
        'title': 'Assassins Creed',
        'rating': 3
      }
    ]
  },
  {
    'num': 37,
    'movie': [
      {
        'title': 'Live By Night',
        'rating': 2
      }
    ]
  },
  {
    'num': 38,
    'movie': [
      {
        'title': 'Jackie',
        'rating': 4
      }
    ]
  },
  {
    'num': 39,
    'movie': [
      {
        'title': 'Passengers',
        'rating': 4
      }
    ]
  }
];

const features = [
  {
    'num': 40,
    'title': 'T2 Trainspotting',
    'desc': "The Danny Boyle classic has spawned a sequel. Choose life. Choose a film magazine. Choose the 'Contents' page. Choose so-called witticisms instead of useful information. Choose choosing. Choose... oh, forget it." 
  },
  {
    'num': 48,
    'title': 'A Monster Calls',
    'desc': "Liam Neeson voices a walking, talking tree. It's the first time we've congratulated someone for their wooden acting."
  },
  {
    'num': 54,
    'title': "Assassin's Creed",
    'desc': "Going by the game, an assassin's creed centres on murder, strenous exercise and the importance of layering with a really fetching hood. So, basically, death and fashion - like The Neon Demon later in this issue..."
  },
  {
    'num': 60,
    'title': 'Micheal Fassbender',
    'desc': "County Kerry's best export, apart from Kerrygold butter. Which, judging by these pictures, Fassbender has never eaten in his life."
  },
  {
    'num': 64,
    'title': 'The Ultimate 2017 Preview',
    'desc': "As if 2017 wasn't already exciting enough with an orange-faced loon looking to upend civilization as we know it, there's also these excellent films to look forward to - check out our sneak peek at this year's greatest-to-come"
  },
  {
    'num': 80,
    'title': 'Casey Affleck',
    'desc': "The younger Batfleck is very good in Manchester By The Sea, but imagine how good he could've been in Sheets By The Water or Tablecloths By The Stream"
  }
];

const review = [
  {
    'num': 88,
    'title': 'The Neon Demon',
    'desc': "The best bits of the cannibal models"
  },
  {
    'num': 94,
    'title': "How to Make a Horror Movie",
    'desc': "The writer and director of Don't Breathe, Rodo Sayagues and Fede Alvarez, on how to create the perfect screamfest"
  },
  {
    'num': 106,
    'title': "Thrill of the Chase",
    'desc': "Behind the making of William Friedkin's classic car chase in To Live and Die in L.A."
  },
  {
    'num': 114,
    'title': "Classic Scene",
    'desc': "Peter Strickland gets depressive."
  }
];

const Ratings = Vue.component('ratings', {
  
  // TEMPLATE
  template: '#ratings',
  
  // PROPS
  props: ['stars']
  
});

new Vue({
  
  // ELEMENT
  el: '#app',
  
  // DATA
  data: {
    Preview: preview,
    OnScreen: onscreen,
    Features: features,
    Review: review
  }
  
});