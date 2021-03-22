export const loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photoResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts, photos] = await Promise.all([postsResponse, photoResponse]);

    const postJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotos = postJson.map((post, index) => {
        return { ...post, cover: photosJson[index].url }
    });

    return postsAndPhotos;
}