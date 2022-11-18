import ExpenseCard from "../components/ExpenseCard";
import ScoreCard from "../components/ScoreCard";

const ProfilePage = () => {
    return ( 
        <div className="grid grid-cols-1">
            <ExpenseCard />
            <ScoreCard />
        </div>
     );
}
 
export default ProfilePage;