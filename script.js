async function gettAllUsa(){
    let usa=  await fetch("https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json")
        .then(response => {
            return response.json();
        })
        .catch(error => {
            return error;
        });
        return usa;
    };
    async function findOne(){
        let uuu = await gettAllUsa();
        let html ='';
        uuu.forEach(element => {
           let htmlSegment=''
            if(element.city.toLowerCase().includes(document.getElementById("search").value.toLowerCase()) ||
            element.state.toLowerCase().includes(document.getElementById("search").value.toLowerCase()))
            {
                console.log(element);
                htmlSegment=`<div class="city">
                <label> the state </label><b>${element.state}</b><label> contain the city  called </label><b>${element.city} </b> 
                <label>It has the latitude</label><b>${element.latitude}<b><label> and the longitude</label><b>${element.longitude}<b>
                <label>  the population number is </label><b>${element.population}<b><label>and also ranked by</label> <b>${element.rank}<b>
                <label> and it's population growth from 2000 to 2013 is</label>
                <b>${element.growth_from_2000_to_2013}</b>
            </div>`;
            html += htmlSegment;
            }
        });
        let container = document.querySelector('.Container');
        container.innerHTML = html;
    }


