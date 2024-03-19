<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        <table class="table table-success">
                           <thead>
                            <tr class="text-center">
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Artista</th>
                                <th>Lanzamiento</th>
                            </tr>
                           </thead>
                           <tbody>
                            <tr class="text-center" v-for="album in albums" :key="album.id">
                                <td>{{ album.id }}</td>
                                <td>{{ album.nombre_album }}</td>
                                <td>{{ album.nombre_artista }}</td>
                                <td>{{ album.fecha_creacion }}</td>
                            </tr>
                           </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            albums: [] // Se debe retornar un objeto
        };
    },
    created() {
        axios.get('http://127.0.0.1:8000/api/album')
             .then(response => {
                 this.albums = response.data;
             })
             .catch(error => {
                 console.error('Error fetching data:', error);
             });
    }
}
</script>

