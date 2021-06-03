// Descrizione:
// Attraverso una chiamata ajax all’API di boolean https://flynn.boolean.careers/exercises/api/array/music avremo a disposizione una decina di dischi musicali.
// Utilizzando vue, stampiamo a schermo una card per ogni album.
// BONUS: Creare una select con tutti i generi dei dischi. In base a cosa scegliamo nella select, vedremo i corrispondenti cd.
// BONUS 2: Ordinare i dischi per anno di uscita.

const app = new Vue ({

    el: "#app",

    data:{
        url: "https://flynn.boolean.careers/exercises/api/array/music",
        albums: [],
        selectedAlbums: [],
        element: "all",
    },

    methods: {
        selectEl () {
            let select = document.getElementById("select").value;
            console.log(select);
            this.selectedAlbums = [];

            for (let index = 0; index < this.albums.length; index++) {
                if (select !== "All") {
                    if (this.albums[index].genre == select) {
                        this.selectedAlbums.push(this.albums[index]) 
                    } 
                } else {
                    this.selectedAlbums.push(this.albums[index])
                }
            }
        },

        olderAlbum (a,b) {
            if (a.year < b.year){
              return -1;
            }
            else if (a.year > b.year){
              return 1;
            }
            return 0;
        }
    },

    mounted () {
        axios.
        get(this.url)
        .then(resp => {
            // console.log(resp.data.response);
            this.albums = resp.data.response;
            this.selectedAlbums = resp.data.response;
            this.albums.sort(this.olderAlbum);
            this.selectedAlbums.sort(this.olderAlbum);
            console.log(this.albums);
        })

    }

})