import { saveFile, fetchFiles } from '../repository/filesRepository.js';



export async function addfile(request, response) {
    console.log("-----Some error------");
    try {
        const fileId = await saveFile(request.body);
        response.status(201).send(`file saved sucessfully: ${fileId}`)
    }
    catch (e) {
        response.status(500).send(`Something went wrong`);
    }
}

export async function getFiles(request, response) {
    try {
        const files = await fetchFiles(user);
        response.status(200).json(files)
    }
    catch (e) {
        console.log(e);
        response.status(200).json([])
    }
}
