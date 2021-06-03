const pinataApiKey = "d9167ece2e70dd4d995b";
const pinataSecretApiKey = "1b08c0b3043d7c861fdcd281f88e125bbfc745f6885e932b6cd089cd73876688";
const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");

const pinFileToIPFS = async () => {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
  let data = new FormData();
  data.append("file", fs.createReadStream("/Users/nicolasmartinod/Documents/EPFL/EPFL_MA4/pds/Pds_code/NFT_test/procam.jpeg"));
  const res = await axios.post(url, data, {
    maxContentLength: "Infinity", 
    headers: {
      'Content-Type': `multipart/form-data; 
      boundary=${data._boundary}`,
      'pinata_api_key': pinataApiKey, 
      'pinata_secret_api_key': pinataSecretApiKey
    }
  });
  console.log(res.data);
};

// const pinFileToIPFS = (pinataApiKey, pinataSecretApiKey) => {
//     const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
//     let data = new FormData();
//     data.append('file', fs.createReadStream('./procam.jpeg'));
// return axios.post(url,
//         data,
//         {
//             headers: {
//                 'Content-Type': `multipart/form-data; boundary= ${data._boundary}`,
//                 'pinata_api_key': pinataApiKey,
//                 'pinata_secret_api_key': pinataSecretApiKey
//             }
//         }
//     ).then(function (response) {
//         //handle response here
//     }).catch(function (error) {
//         //handle error here
//     });
// };

pinFileToIPFS();
