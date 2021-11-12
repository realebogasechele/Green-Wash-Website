import { Input, Label } from "@theme-ui/components"

export default function LabelInput({connect, inName}){
    return(
        <>
        <Input name={connect} id={connect} defaultValue={inName}/>
        </>
    );
}