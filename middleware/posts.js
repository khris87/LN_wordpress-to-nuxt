import axios from 'axios'

export default function ({store}) {
    return axios.get(`http://raspberrygreg.ddns.net/newMoon/index.php/wp-json/wp/v2/posts`)
        .then((response) => {
            store.commit('getPosts', response.data);
        })
}