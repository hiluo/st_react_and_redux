import {Dispatcher} from 'flux';


//第个模块只加载一次，每一个JS只执行一次，如果下次再去加载同目录下同一件文件，直接从内存中读取，一个模块就是一个单例，或者说是一个对象
export default new Dispatcher();
