import { useSelector } from 'react-redux';
import { RootState } from '../modules';

export default function useMenus() {
  const menus = useSelector((state: RootState) => state.menu);
  return menus;
}
