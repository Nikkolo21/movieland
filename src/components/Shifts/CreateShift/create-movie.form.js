export const createMovieForm = [
    {
        id: 1,
        name: "name",
        title: "Nombre de la película*",
        inputType: "text",
        type: "primary",
        placeholder: "My movie name", 
        minLenght: 2,
        maxLenght: 100,
        required: true
    },
    {
        id: 2,
        name: "created_date",
        title: "Fecha de publicación*",
        inputType: "date",
        type: "primary",
        placeholder: "My movie date", 
        minLenght: 2,
        maxLenght: 10,
        required: true
    },
    {
        id: 3,
        name: "state",
        title: "Estado*",
        inputType: "text",
        type: "primary",
        placeholder: "My project status", 
        minLenght: 2,
        maxLenght: 30,
        required: true
    }
]