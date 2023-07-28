import Label from "../atoms/Label";
import Input from "../atoms/Input";

function WrapperIntput({msn, type, placeholder, name}) {
    return (
        <div className="form-group">
            
            <Label msn={msn} />
            <Input type={type} placeholder={placeholder} pname={name} />
    
        </div>
    );
}

export default WrapperIntput;