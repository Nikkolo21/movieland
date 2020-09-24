import moment from 'moment';

export const editMovieForm = ({name, pub_date, status}) => ([
    {
        id: 1,
        name: "name",
        title: "Nombre de la película*",
        inputType: "text",
        type: "primary",
        placeholder: "My movie name", 
        minLenght: 2,
        maxLenght: 100,
        required: true,
        value: name
    },
    {
        id: 2,
        name: "pub_date",
        title: "Fecha de publicación*",
        inputType: "date",
        type: "primary",
        required: true,
        value: pub_date,
        max: moment().format("YYYY-MM-DD")
    },
    {
        id: 3,
        name: "status",
        title: "Estado*",
        inputType: "text",
        type: "primary",
        placeholder: "My project status", 
        minLenght: 2,
        maxLenght: 30,
        required: true,
        value: status
    }
])