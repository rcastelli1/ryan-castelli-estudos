function getUserName() {
    return prompt("Qual é o seu nome?");
}

function showMenu(name) {
    return prompt(`${name}, selecione uma das opções abaixo:\n` +
                  "1 – Adicionar um lugar na lista de lugares visitados\n" +
                  "2 – Remover um lugar da lista de lugares visitados\n" +
                  "3 – Listar todos os lugares visitados\n" +
                  "4 – Mostrar todos os lugares visitados no documento HTML\n" +
                  "5 – Sair do menu");
}

function addPlace(list) {
    const place = prompt("Digite o nome do lugar que deseja adicionar:");
    if (place) {
        const confirmation = confirm(`Tem certeza que deseja adicionar '${place}' à lista?`);
        if (confirmation) {
            list.push(place);
            alert("Lugar adicionado com sucesso!");
        } else {
            alert("Ação cancelada.");
        }
    }
}

function removePlace(list) {
    if (list.length === 0) {
        alert("Você ainda não adicionou nenhum lugar na lista.");
        return;
    }

    const listedPlaces = list.map((place, index) => `${index + 1} - ${place}`).join('\n');
    const index = parseInt(prompt(`Escolha o número do lugar que deseja remover:\n${listedPlaces}`)) - 1;

    if (index >= 0 && index < list.length) {
        const confirmation = confirm(`Tem certeza que deseja remover '${list[index]}' da lista?`);
        if (confirmation) {
            list.splice(index, 1);
            alert("Lugar removido com sucesso!");
        } else {
            alert("Ação cancelada.");
        }
    } else {
        alert("Opção inválida.");
    }
}

function listPlaces(list) {
    if (list.length === 0) {
        alert("Você tem 0 lugares adicionados.");
    } else {
        const sortedPlaces = list.slice().sort();
        alert(sortedPlaces.map((place, index) => `${index + 1} - ${place}`).join('\n'));
    }
}

function showPlacesInDOM(list) {
    if (list.length === 0) {
        alert("Nenhum lugar registrado para mostrar no DOM.");
        return;
    }

    const orderedList = document.getElementById("places-list");
    orderedList.innerHTML = ''; 

    list.slice().sort().forEach(place => {
        const item = document.createElement("li");
        item.textContent = place;
        orderedList.appendChild(item);
    });

    alert("Lugares exibidos no DOM com sucesso!");
}

function manageMenu() {
    const userName= getUserName();
    const visitedPlaces= [];

    let option;
    do {
        option = showMenu(userName);

        switch (option) {
            case '1':
                addPlace(visitedPlaces);
                break;
            case '2':
                removePlace(visitedPlaces);
                break;
            case '3':
                listPlaces(visitedPlaces);
                break;
            case '4':
                showPlacesInDOM(visitedPlaces);
                break;
            case '5':
                alert("Saindo do menu.");
                break;
            default:
                alert("Opção inválida. Tente novamente.");
        }
    } while (option !=='5');
}

window.onload = manageMenu;