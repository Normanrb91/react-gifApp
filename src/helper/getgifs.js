

export const getGifs = async (category) => {

    const url = `http://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(category)}&api_key=sKW8PATDaFT4HaZuRgyAcnVOtUzATuD2`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gif = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gif
}