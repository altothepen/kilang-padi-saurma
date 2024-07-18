function initMap() {
    // Koordinat untuk Jl. Simpang Sigura-gura No. 1, Porsea
    const location = { lat: 2.4412, lng: 99.2204 };

    // Buat peta baru
    const map = new google.maps.Map(document.getElementById('map'), {
        center: location,
        zoom: 15
    });

    // Tambahkan marker di lokasi
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'Jl. Simpang Sigura-gura No. 1, Porsea'
    });
}
