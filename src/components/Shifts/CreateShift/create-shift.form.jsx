export const createShiftForm = [
    {
        id: 1,
        name: "shift",
        title: "Turno*",
        inputType: "time",
        type: "primary",
        placeholder: "My shift hour", 
        minLenght: 2,
        maxLenght: 10,
        required: true
    },
    {
        id: 2,
        name: "status",
        title: "Estado*",
        inputType: "text",
        type: "primary",
        placeholder: "My shift status", 
        minLenght: 2,
        maxLenght: 30,
        required: true,
        dropdown: true
    }
]