export const editShiftForm = ({shift, status}) => ([
    {
        id: 1,
        name: "shift",
        title: "Turno*",
        inputType: "time",
        type: "primary",
        required: true,
        value: shift
    },
    {
        id: 2,
        name: "status",
        title: "Estado*",
        inputType: "text",
        type: "primary",
        placeholder: "My Shift status",
        minLenght: 2,
        maxLenght: 30,
        required: true,
        value: status,
        dropdown: true
    }
])