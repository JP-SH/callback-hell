const willGetYouADog = new Promise((resolve, reject) => {
  const rand = Math.random();
  if(rand < 0.5) {
    resolve();
  } else {
    reject();
  }
});

// .then runs if promise is resolved
willGetYouADog.then(() => {
  console.log('YAY WE GOT A NEW DOG');
});

// .catch runs if promise is rejected
willGetYouADog.catch(() => {
  console.log('NO DOG:(')
})
