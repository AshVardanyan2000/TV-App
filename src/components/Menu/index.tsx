import React from 'react';
import { menuItems } from '../../helpers/StaticData';
import { MenuItems } from '../../types';
import styles from './menu.module.scss';
import avatarIcon from '../../assets/icons/avatar.png';
import { useLocation } from 'react-router-dom';

function Index() {
  const { pathname } = useLocation();

  const onMenuClick = (path: string) => {
    console.log(path);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.avatar}>
          <div>
            <img src={avatarIcon} alt="avatar"/>
          </div>

          <p>Daniel</p>
        </div>

        <div className={styles.item_wrapper}>
          {menuItems.map((item: MenuItems): React.ReactElement => {
            const itemClassname = [styles.item];
            if (pathname === item.path) {
              itemClassname.push(styles.active);
            }

            return (
              <div
                role="button"
                tabIndex={0}
                onClick={() => onMenuClick(item.path)}
                className={itemClassname.join(' ')}
                key={item.path}
              >
                <div className={styles.item_icon}>
                  <img src={item.icon} alt={item.path}/>
                </div>

                <p>{item.label}</p>
              </div>
            );
          })}
        </div>

        <div className={styles.bottom_item_wrapper}>
          <div role="button" tabIndex={0} onClick={() => onMenuClick('/language')}>
            LANGUAGE
          </div>

          <div role="button" tabIndex={0} onClick={() => onMenuClick('/help')}>
            GET HELP
          </div>

          <div role="button" tabIndex={0} onClick={() => {
          }}>
            EXIT
          </div>
        </div>
      </div>
      <div className={styles.layer}/>
    </>
  );
}

export default Index;
