import PersonIcon from '@mui/icons-material/Person';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export const inputFields = [
    {
      id:"1",
      name:"firstName",
      type:"text",
      label:"First Name",
      placeholderIcon:<PersonIcon/>
    },
    {
      id:"2",
      name:"lastName",
      type:"text",
      label:"Last Name",
      placeholderIcon:<PersonIcon/>
    },
    {
      id:"3",
      name:"displayName",
      type:"text",
      label:"Display Name",
      placeholderIcon:<AccountBoxIcon/>
    },
    {
      id:"4",
      name:"email",
      type:"text",
      label:"Email",
      placeholderIcon:<EmailIcon/>
    },
    {
      id:"5",
      name:"phoneNumberPersonal",
      type:"text",
      label:"Phone No (Personal)",
      placeholderIcon:<LocalPhoneIcon/>
    },
    {
      id:"6",
      name:"phoneNumberWork",
      type:"text",
      label:"Phone No (Work)",
      placeholderIcon:<LocalPhoneIcon/>
    },
    {
      id:"7",
      name:"location",
      type:"text",
      label:"Location",
      placeholderIcon:<LocationOnIcon/>
    }
  ];

  export const initialState = {
    firstName : '',
    lastName : '',
    displayName : '',
    email : '',
    phoneNumberPersonal : '',
    phoneNumberWork : '',
    location : ''
  }