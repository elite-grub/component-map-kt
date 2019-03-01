import styled from 'styled-components';
import { Directions } from 'styled-icons/material/Directions';
import { LocationOn } from 'styled-icons/material/LocationOn';
import { Phone } from 'styled-icons/material/Phone';
import { LinkExternal } from 'styled-icons/boxicons-regular/LinkExternal';
import { CalendarEvent } from 'styled-icons/boxicons-regular/CalendarEvent';
import { PhoneIphone } from 'styled-icons/material/PhoneIphone';
import { Edit } from 'styled-icons/material/Edit';

export const GetDirections = styled(Directions)`
  color: grey;
`;

export const GetLocation = styled(LocationOn)`
  color: grey;
`;

export const GetPhone = styled(Phone)`
  color: grey;
`;

export const GetLink = styled(LinkExternal)`
  color: grey;
`;

export const GetCalendar = styled(CalendarEvent)`
  color: grey;
`;

export const GetIphone = styled(PhoneIphone)`
  color: grey;
`;

export const GetEdit = styled(Edit)`
  color: grey;
`;

export const Border = styled.div`
padding: 5px;
background: #fff;
border: 1px solid #ccc;
width: 300px;
height: 353px;
`;

export const BlueLinks = styled.div`
  color: #0073bb;
`;

export const Font = styled.div`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; 
`;

/* The Modal (background) */
export const ModalStyle = styled.div`
  display: none; 
  position: fixed; 
  z-index: 1; 
   
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: none; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.8); 
`;
