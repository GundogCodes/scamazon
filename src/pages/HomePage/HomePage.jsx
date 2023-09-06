import styles from './HomePage.module.scss';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();
  function handleClick(e) {
    const itemId = e.target.innerText;
    console.log(itemId);
    navigate(`/item/${itemId}`);
  }
  return (
    <div className={styles.HomePage}>
      <h1>WELCOME TO SCAMAZON</h1>
      <h3>By, Alex, Andrew, Bao, Gunish, Jeff, Sapana, TJ</h3>
      <button onClick={handleClick}>64ee2bf303edb31e00ae01b7</button>
    </div>
  );
}
