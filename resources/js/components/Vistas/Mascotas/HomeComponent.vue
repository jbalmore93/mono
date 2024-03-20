<template>
                    <div class="form-group mb-2">
                       <input type="text" v-model="search"> 
                    </div>
                    <div v-if="albums!=''">
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
                    <div class="text-center" v-else>
                        <table class="table table-success">
                            <thead>
                             <tr class="text-center">
                                <th>
                                    No hay registros que mostrar
                                </th>
                            </tr>
                            </thead>
                        </table>
                        </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            search:'',
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

