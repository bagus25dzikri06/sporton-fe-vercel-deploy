import Button from "@/app/(landing)/components/ui/button";
import Modal from "../ui/modal";

type TBankInfoModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

const BankInfoModal = ({isOpen, onClose} : TBankInfoModalProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Add Bank Account">
            <div className="flex flex-col gap-4 w-full">
                <div className="input-group-admin">
                    <label htmlFor="bankName">Bank Name</label>
                    <input type="text" name="bankName" id="bankName" placeholder="e. g. Mandiri, BCA, BRI" />
                </div>
                <div className="input-group-admin">
                    <label htmlFor="accountName">Account Name</label>
                    <input type="text" name="accountName" id="accountName" placeholder="123124344234234" />
                </div>
                <div className="input-group-admin">
                    <label htmlFor="accountHolder">Account Holder</label>
                    <input type="text" name="accountHolder" id="accountHolder" placeholder="Holder Name as registered on the account" />
                </div>
            </div>
            <div className="flex justify-end gap-5 mt-10">
                <Button className="ml-auto mt-4 rounded-lg">Add Bank Account</Button>
            </div>
        </Modal>
    )
}

export default BankInfoModal