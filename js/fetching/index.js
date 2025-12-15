const fetchEl = document.getElementById("fetched");

// //https://apis.scrimba.com/dog.ceo/api/breeds/image/random
// fetch("https://apis.scrimba.com/dog.ceo/api/breeds/image/random")
//   .then((response) => response.json())
//   .then((data) => {
//     const imgEl = document.createElement("img");
//     imgEl.src = data.message;
//     imgEl.alt = "Dog";
//     fetchEl.append(imgEl);
//     fetchEl.style.width = "20%";
//     fetchEl.style.height = "20%";
//   });

//https://apis.scrimba.com/bored/api

// const response = await fetch("https://apis.scrimba.com/bored/api/activity");
// const data = await response.json();
// console.log(data);

// try {
//   const response = await fetch(
//     "https://apis.scrimba.com/dog.ceo/api/breeds/image/random"
//   );
//   if (!response.ok) {
//     new Error("There was a problem with the API");
//   }
//   const data = await response.json();
//   const imgEl = document.createElement("img");
//   imgEl.src = data.message;
//   imgEl.alt = "Dog";
//   fetchEl.append(imgEl);
//   fetchEl.style.width = "20%";
//   fetchEl.style.height = "20%";
// } catch (err) {
//   console.log(err);
// } finally {
//   console.log("Done");
// }

//https://apis.scrimba.com/jsonplaceholder

// try {
//   const response = await fetch(
//     "https://apis.scrimba.com/jsonplaceholder/posts",
//     {
//       method: "POST",
//       body: JSON.stringify({
//         title: "Yhello",
//         body: "GYFJHBV ",
//         userId: 11,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );
//   const data = await response.json();
//   if (!response.ok) {
//     throw new Error("There s a problem with the API");
//   }
//   console.log(data);
// } catch (err) {
//   console.log(err);
// } finally {
//   console.log("Done");
// }
// const promise = new Promise((resolve, reject) => {
//   const success = Math.random() > 0.5;
//   if (success) {
//     resolve("Operation Successful");
//   } else {
//     reject("Operation Unsuccessful");
//   }
// });

// try {
//   const response = await promise;
//   console.log(response);
// } catch (err) {
//   console.log(err);
// }

const preLoadImg = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.addEventListener("load", () => {
      resolve(img);
    });
    img.addEventListener("error", (err) => {
      reject(new Error(`Image has not loaded from ${url}`));
      console.log(err);
    });
  });
};

try {
  const results = await preLoadImg(
    "https://scrimba.ams3.cdn.digitaloceanspaces.com/assets/courses/gadvancedjs/scenic3.jpg"
  );

  fetchEl.append(results);
} catch (err) {
  console.log(err);
}
