import AsyncStorage from '@react-native-async-storage/async-storage';

// BUSCAR OS LINK SALVOS.
export async function getLinksSave(key) {
  const myLinks = await AsyncStorage.getItem(key)

  let linksSaves = JSON.parse(myLinks) || [];

  return linksSaves;
}

// SALVAR UM LINK NO STORAGE.
export async function saveLink(key, newLink) {
  let linksStored = await getLinksSave(key);
  
  // SE TIVER ALGUM LINK SALVO COM O MESMO ID / OU DUPLICADO PRECISO IGNORAR.
  const hasLink = linksStored.some( link => link.id === newLink.id);

  if(hasLink) {
    console.log('ESSE LINK JÁ EXISTE NA LISTA.');
    return; //PARAR EXECUÇÃO AQUI.
  }

  linksStored.push(newLink);
  await AsyncStorage.setItem(key, JSON.stringify(linksStored));
  console.log('LINK SALVO COM SUCESSO!');
}

// DELETAR ALGUM LINK ESPECIFICO.
export async function deleteLink(links, id) {
  let myLinks = links.filter( (item) => {
     return (item.id !== id)  
  })

  await AsyncStorage.setItem('sujeitolinks', JSON.stringify(myLinks));

  console.log('ITEM DELETADO DA LISTA!');
  return myLinks;
}