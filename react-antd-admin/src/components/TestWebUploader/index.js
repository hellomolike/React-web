// import LargeUploader from 'react-large-uploader';
// import 'react-large-uploader/lib/upload.css';
// import React from 'react';

// export default class TestWebUploader extends React.Component {
//     render() {
//         const options = {
//             resize: false,
//             auto: true,
//             server: '/upload',
//             accept: {
//               extensions: 'zip',
//             },
//           };
//         const config = {
//             title: '上传文件',
//             options,
//             width: 300,
//             onChange: (file, list) => console.log(file, list),
//             beforeFileQueued: (file) => {
//               if (file.size === 0) {
//                 alert('不能上传空文件哦~');
//                 return false;
//               }
//               if (file.ext !== 'zip') {
//                 alert('只能上传zip哦~');
//                 return false;
//               }
//               return true;
//             },
//             fillDataBeforeSend: () => ({ fileType: '1' }),
//             uploadResponse: (file, ret) => {
//               const { code } = ret;
//               return code === 0;
//             },
//           };
//           console.log("出错了？")
//         return (
//             <LargeUploader
//             {...config}
           
//             >
                
//             </LargeUploader>
//         )
//     }

// }


