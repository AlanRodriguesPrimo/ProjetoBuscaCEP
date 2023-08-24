const apiUrl = "https://viacep.com.br/ws/";
const container = document.querySelector(".container");
const warning = document.querySelector(".warning");
const btn = document.querySelector("#search");

btn.addEventListener("click", () => {
    const cepNome = document.querySelector("#CEP").value;

    fetch(apiUrl + cepNome + "/json").then((response) => {
        return response.json();
    }).then((data) => {
        if(data["erro"]){
            warning.style.display="block"
            container.style.display= "none"
            warning.innerHTML = "CEP inválido"
        }else{
        container.style.display = "block";
        warning.style.display = "none";
        const table = `<table>
        <tr>    
            <th>CEP</th>
            <th>Logradouro</th>
            <th>Complemento</th>
            <th>Bairro</th>
            <th>Localidade</th>
            <th>UF</th>
        </tr>

        <tr>
        <td>${data["cep"]}</td>
        <td>${data["logradouro"]}</td>
        <td>${data["complemento"]}</td>
        <td>${data["bairro"]}</td>
        <td>${data["localidade"]}</td>
        <td>${data["uf"]}</td>
        
        </tr>

    </table>`
    container.innerHTML = table;
        }
    }).catch((error) => {
        container.style.display = "none";
        warning.style.display = "block";   
    })

});