function getAllTopics(){
    $.getJSON("/api/topics", function(data){
        console.dir(data);
        for(let t of data){
            let cardstring=`<div class="card-body">
            <h5 class="card-title">Merin päiväkirja</h5>
            <h6 class="card-subtitle mb-2 text-muted">Tähän alle tulee sisältöä lomakkeesta
            </h6>
            <table class="table table-borderless">

                <tbody>
                    <tr>
                        <th scope="row">Aiheen tunniste</th>
                        <td>Sisältöä...</td>
                    </tr>
                    <tr>
                        <th scope="row">Aiheen otsikko</th>
                        <td>${t.Title}</td>
                    </tr>
                    <tr>
                        <th scope="row">Aiheen kuvaus</th>
                        <td>Sisältöä...</td>
                    </tr>
                    <tr>
                        <th scope="row">Aika-arvio</th>
                        <td>Sisältöä...</td>
                    </tr>
                    <tr>
                        <th scope="row">Käytetty aika</th>
                        <td>Sisältöä...</td>
                    </tr>
                    <tr>
                        <th scope="row">Lähteet</th>
                        <td>Sisältöä...</td>
                    </tr>
                    <tr>
                        <th scope="row">Aloitusaika</th>
                        <td>Sisältöä...</td>
                    </tr>
                    <tr>
                        <th scope="row">Status</th>
                        <td>Sisältöä...</td>
                    </tr>
                    <tr>
                        <th scope="row">Milloin aihe on opiskeltu</th>
                        <td>Sisältöä...</td>
                    </tr>
                </tbody>
            </table>
        </div>`
        $("#collapseOne").append(cardstring);
        }
    })
}
function Luo(){
    console.log("luo")
    let uusitopic={
        Title:$("#Title").val(),
        Description:$("#Description").val()
    }
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/api/topics",
        "method": "POST",
        "headers": {
          "Content-Type": "application/json"
        },
      
        "data": JSON.stringify(uusitopic)
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
        getAllTopics();
      });
}

$(document).ready(function(){
    getAllTopics();
})
