import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FavouriteService } from './favourite.service';
import { CreateFavouriteDto } from './dto/create-favourite.dto';
import { UpdateFavouriteDto } from './dto/update-favourite.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('favourite')
@Controller('favs')
export class FavouriteController {
  constructor(private readonly favouriteService: FavouriteService) { }

  @Post('/track/:id')
  create(@Body() createFavouriteDto: CreateFavouriteDto) {
    return this.favouriteService.create(createFavouriteDto);
  }

  @Get()
  findAll() {
    return this.favouriteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.favouriteService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFavouriteDto: UpdateFavouriteDto,
  ) {
    return this.favouriteService.update(+id, updateFavouriteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.favouriteService.remove(+id);
  }
}
