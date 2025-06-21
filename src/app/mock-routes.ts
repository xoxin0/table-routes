import { IRoute } from './interfaces/IRoute';

export const MOCK_ROUTES: IRoute[] = [
  { uuid: '1', address: '192.168.1.0', mask: '255.255.255.0', gateway: '192.168.1.1', interface: 'eth0' },
  { uuid: '2', address: '10.0.0.0', mask: '255.0.0.0', gateway: '10.0.0.1', interface: 'eth1' },
  { uuid: '3', address: '172.16.0.0', mask: '255.240.0.0', gateway: '172.16.0.1', interface: 'wlan0' },
  { uuid: '4', address: '192.168.0.0', mask: '255.255.0.0', gateway: '192.168.0.1', interface: 'eth0' },
  { uuid: '5', address: '192.168.2.0', mask: '255.255.255.0', gateway: '192.168.2.1', interface: 'eth1' },
  { uuid: '6', address: '10.1.0.0', mask: '255.255.0.0', gateway: '10.1.0.1', interface: 'wlan1' },
  { uuid: '7', address: '172.17.0.0', mask: '255.255.0.0', gateway: '172.17.0.1', interface: 'eth0' },
  { uuid: '8', address: '192.168.3.0', mask: '255.255.255.0', gateway: '192.168.3.1', interface: 'eth1' },
  { uuid: '9', address: '10.2.0.0', mask: '255.255.0.0', gateway: '10.2.0.1', interface: 'wlan0' }
];
