import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule, BlogPostModule, UsersModule } from 'modules';
import { DatabaseModule } from 'shared';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    AuthModule,
    BlogPostModule,
    UsersModule,
  ],
})
export class AppModule {}
