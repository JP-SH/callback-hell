// const willGetYouADog = new Promise((resolve, reject) => {
//   const rand = Math.random();
//   if(rand < 0.5) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// // .then runs if promise is resolved
// willGetYouADog.then(() => {
//   console.log('YAY WE GOT A NEW DOG');
// });

// // .catch runs if promise is rejected
// willGetYouADog.catch(() => {
//   console.log('NO DOG:(')
// })

// the same code as above but written as a function that returns a promise with a time delay
const makeDogPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
    if(rand < 0.5) {
      resolve();
    } else {
      reject();
    }
    }, 5000);
  });
}

// .then runs if promise is resolved
// .catch runs if promise is rejected
// you can chain them both together without having to create a new variable or hacing to reference the promise again. Only one or the other will run
makeDogPromise()
.then(() => {
  console.log('YAY WE GOT A NEW DOG');
})
  .catch(() => {
  console.log('NO DOG:(');
});

//This is a FAKE Http Request Function
//It takes 1 second to resolve or reject the promise, depending on the url that is passed in
const fakeRequest = (url) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const pages = {
				'/users' : [
					{ id: 1, username: 'Bilbo' },
					{ id: 5, username: 'Esmerelda' }
				],
				'/about' : 'This is the about page!'
			};
			const data = pages[url];
			if (data) {
				resolve({ status: 200, data }); //resolve with a value!
			}
			else {
				reject({ status: 404 }); //reject with a value!
			}
		}, 1000);
	});
};

fakeRequest('/users')
	.then((res) => {
		console.log('Status Code', res.status);
		console.log('Data', res.data);
		console.log('REQUEST WORKED!');
	})
	.catch((res) => {
		console.log(res.status);
		console.log('REQUEST FAILED');
	});

fakeRequest('/dogs')
	.then((res) => {
		console.log('Status Code', res.status);
		console.log('Data', res.data);
		console.log('REQUEST WORKED!');
	})
	.catch((res) => {
		console.log(res.status);
		console.log('REQUEST FAILED');
	});
