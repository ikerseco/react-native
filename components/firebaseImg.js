import firebase from 'firebase';
import conf from '../firebase/config'

const uriToBlob = (uri) => {

    return new Promise((resolve, reject) => {

      const xhr = new XMLHttpRequest();

      xhr.onload = function() {
        // return the blob
        resolve(xhr.response);
      };
      
      xhr.onerror = function() {
        // something went wrong
        reject(new Error('uriToBlob failed'));
      };

      // this helps us get a blob
      xhr.responseType = 'blob';

      xhr.open('GET', uri, true);
      xhr.send(null);

    });

  }

const firebaseImg = async (imageArr)  => {
    console.log("fire:\n"+imageArr)
    firebase.initializeApp(conf)
    let storage = firebase.storage();
    let storageRef = storage.ref()
    let idUser = new Date().getTime();
    let json = {id:idUser,image:[]}

    
    var blob = await uriToBlob(imageArr[0].uri)
    var put = storageRef.child(`image/${idUser.toString()}/Photo1.jpg`)
    await put.put(blob,{contentType: 'image/jpg'}).then((snapshot)=>{
        console.log(snapshot)
    })
    var Photo1 = await put.getDownloadURL()
    console.log(Photo1)
    json.image.push(Photo1)
    //
    var blob = await uriToBlob(imageArr[1].uri)
    var put = storageRef.child(`image/${idUser.toString()}/Photo2.jpg`)
    await put.put(blob,{contentType: 'image/jpg'}).then((snapshot)=>{
        console.log("pot1")
    })
    var Photo2 = await put.getDownloadURL()
    console.log(Photo2)
    json.image.push(Photo2)
    //
    var blob = await uriToBlob(imageArr[2].uri)
    var put = storageRef.child(`image/${idUser.toString()}/Photo3.jpg`)
    await put.put(blob,{contentType: 'image/jpg'}).then((snapshot)=>{
      console.log("pot3")

    })
    var Photo3 = await put.getDownloadURL()
    console.log(Photo3)
    json.image.push(Photo3)
    return(json)
}

export default firebaseImg;
