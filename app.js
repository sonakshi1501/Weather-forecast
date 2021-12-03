
document.getElementById('loader').style.display = "none" // for visibility
document.getElementById('addDataBtn').style.display = "block"

document.getElementById('addDataBtn').addEventListener('click', addData)


function addData() {
    document.getElementById('loader').style.display = "block" // for visibility
    document.getElementById('addDataBtn').style.display = "none"
    let country1 = document.getElementById('country').value
    fetch("https://goweather.herokuapp.com/weather/" + country1).then(res => res.json()).then(data => {
        console.log(data)
        printdata(data, country1)
    }).catch(err => console.log(err))
}

function printdata(data, country) {
    if (data.temperature.length > 0) {
        document.getElementById('summaryData').innerHTML = `
            <div class="card" style="background-color: lightblue;">
                <h4 class="mt-3 mb-0">Country:${country}</h4>
                <p class="my-0">Temperature : ${data.temperature}</p>
                <p class="my-0">Wind: ${data.wind}</p>
                <p class="mb-3 my-0">Description: ${data.description}</p>
            </div>
        ` 
        for(let i=0;i<data.forecast.length;i++){
            document.getElementById('extraCard').innerHTML +=`
                <div class="col-md-4">
                    <div class="card">
                    <p class="my-0">Day : ${data.forecast[i].day}</p>
                    <p class="my-0">Temperature: ${data.forecast[i].temperature}</p>
                    <p class="mb-3 my-0">Wind: ${data.forecast[i].wind}</p>
                    </div>
                </div>
            `
        }
    } 

    else {
        document.getElementById('errorMsg').innerHTML = `
        <div class="col-md-12">
        <div class="alert alert-danger" role="alert">
        Please enter valid country name!
        </div>
        </div>
        `
    }
    document.getElementById('loader').style.display = "none" // for visibility
    document.getElementById('addDataBtn').style.display = "block"
}

