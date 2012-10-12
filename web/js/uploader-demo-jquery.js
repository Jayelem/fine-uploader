$(document).ready(function() {
    var errorHandler = function(event, id, fileName, reason) {
        console.log("id: " + id + ", fileName: " + fileName + ", reason: " + reason);
    };


    $('#basicUploadSuccessExample').fineUploader({
        debug: true,
        request: {
            endpoint: "/upload/receiver"
        }
    }).on('error', errorHandler);


//    $('#manualUploadModeExample').fineUploader({
//        autoUpload: false,
//        uploadButtonText: "Select Files",
//        request: {
//            endpoint: "/upload/receiver"
//        }
//    }).on('error', errorHandler);

//    $('#triggerUpload').click(function() {
//        uploader2.uploadStoredFiles();
//    });


    $('#basicUploadFailureExample').fineUploader({
        request: {
            endpoint: "/upload/receiver",
            params: {"generateError": true}
        },
        failedUploadTextDisplay: {
            mode: 'custom',
            maxChars: 5
        }
    }).on('error', errorHandler);


    $('#uploadWithVariousOptionsExample').fineUploader({
        multiple: false,
        request: {
            endpoint: "/upload/receiver",
        },
        validation: {
            allowedExtensions: ['jpeg', 'jpg', 'txt'],
            sizeLimit: 50000
        },
        text: {
            uploadButton: "Click Or Drop"
        }
    }).on('error', errorHandler);


//    uploader5 = new qq.FineUploaderBasic({
//        multiple: false,
//        autoUpload: false,
//        button: $("#fubButton")[0],
//        request: {
//            endpoint: "/upload/receiver",
//        },
//        callbacks: {
//            onError: function(id, fileName, reason) {
//                console.log("id: " + id + ", fileName: " + fileName + ", reason: " + reason);
//            }
//        },
//        button: $('#fubUploadButton')[0]
//    });
});