/* eslint-disable jsx-a11y/no-static-element-interactions */
import Image from 'next/image';
import cx from 'classnames';
import Link from 'next/link';

interface MenuItemProps {
    title: string;
    icon: 'ic-menu-overview' | 'ic-menu-transactions' | 'ic-menu-messages' | 'ic-menu-card' | 'ic-menu-reward' | 'ic-menu-settings' | 'ic-menu-logout';
    active?: boolean;
    href?: string;
    onClick?: () => void;
}
export default function MenuItem(props: Partial<MenuItemProps>) {
  const {
    title, icon, active, href = '/',
    onClick,
  } = props;
  const classItem = cx({
    item: true,
    'mb-30': true,
    active,
  });

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div className={classItem} onClick={onClick}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} width={25} height={25} />
      </div>
      <p className="item-title m-0">
        {onClick ? (
          <a className="text-lg text-decoration-none">
            {title}
          </a>
        ) : (
          <Link href={href}>
            <a className="text-lg text-decoration-none">
              {title}
            </a>
          </Link>
        )}
      </p>
    </div>
  );
}
