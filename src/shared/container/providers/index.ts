import {container} from 'tsyringe';
import IStorageProvider from './StorageProvider/models/IStorageProvider'
// import IMailProvider from './MailProvider/models/IMailProvider'

// import MailProvider from './MailProvider/implementations/MailProvider'
import DiskStorageProvider from './StorageProvider/implementations/DiskStorageProvider'

// container.registerSingleton<IMailProvider>(
//   'StorageProvider',
//   MailProvider,
// );

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);