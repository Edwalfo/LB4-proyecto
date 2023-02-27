import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FacturacionMongoDbDataSource} from '../datasources';
import {Articulos, ArticulosRelations} from '../models';

export class ArticulosRepository extends DefaultCrudRepository<
  Articulos,
  typeof Articulos.prototype.id,
  ArticulosRelations
> {
  constructor(
    @inject('datasources.FacturacionMongoDB') dataSource: FacturacionMongoDbDataSource,
  ) {
    super(Articulos, dataSource);
  }
}
