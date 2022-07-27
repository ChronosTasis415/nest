// app.module 是应用程序的根模块
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  // exports: [], // 导出服务的列表，供其他模块导入引用
  imports: [TypeOrmModule.forRoot(), PostsModule], // 导入模块的列表
  controllers: [AppController], // 处理http请求，包括路由控制，向客户端返回相应，各个模块之间可以共享
  providers: [AppService], //注入器实例化的提供者 处理具体的业务逻辑
})
export class AppModule {}
