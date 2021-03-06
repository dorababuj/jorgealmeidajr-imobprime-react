
import axios from 'axios'

const ROOT_URL = window.location.href.indexOf('localhost') > 0 ? 'http://localhost:8080/api' : '/api'

export default class PropertiesAPI {

  static fetchPropertiesMostRecent(cityId) {
    const request = axios({
      method: 'get',
      url: `${ROOT_URL}/search/properties?cityId=${cityId}`,
      headers: []
    })

    return request
  }

  static fetchProperties(params) {
    const request  = axios({
      method: 'post',
      url: `${ROOT_URL}/searchProperties`,
      headers: [],
      data: params
    })

    return request
  }


  static fetchAll() {
    const request = axios({
      method: 'get',
      url: `${ROOT_URL}/properties`,
      headers: []
    })

    return request
  }

  static fetchAllByParams(params) {
    const request = axios({
      method: 'post',
      url: `${ROOT_URL}/search-properties`,
      headers: [],
      data: params
    })

    return request
  }

  static fetchById(id) {
    const request = axios({
      method: 'get',
      url: `${ROOT_URL}/properties/${id}`,
      headers: []
    })

    return request
  }


  static getTiposImovel() {
    const tiposImovel = [
      { nome: 'Apartamento'},
      { nome: 'Casa'},
      { nome: 'Cobertura'},
      { nome: 'Chácara'},
      { nome: 'Garagem'},
      { nome: 'Kitnet'},
      { nome: 'Loft'},
      { nome: 'Loja'},
      { nome: 'Galpão'},
      { nome: 'Prédio'},
      { nome: 'Sala'},
      { nome: 'Terreno'},
    ]

    let index = 1;

    return tiposImovel.sort((obj1, obj2) => {
      const nome1 = obj1.nome.toLowerCase()
      const nome2 = obj2.nome.toLowerCase()

      if (nome1 < nome2) // ASC
        return -1
      if (nome1 > nome2)
        return 1
      return 0 // default return value (no sorting)

    }).map((obj) => {
      return { id: index++, ...obj }
    })
  }

  static getSituaçoesImovel() {
    const situacoesImovel = [
      //{ nome: 'Imóvel na planta'},
      //{ nome: 'Em Construção'},
      //{ nome: 'Reservado'},
      { nome: 'Disponível para Vender'},
      { nome: 'Vendido'},
      { nome: 'Disponível para Alugar'},
      { nome: 'Alugado'},
    ]

    let index = 1;

    return situacoesImovel.map((obj) => {
      return { id: index++, ...obj }
    })
  }

  sortAscByString(fnValue1, fnValue2) {
    const value1 = fnValue1()
    const value2 = fnValue2()

    if (value1 < value2) // ASC
      return -1 
    if (value1 > value2)
      return 1
    return 0 // default return value (no sorting)
  }

}
