import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FacturacionDataSource} from '../datasources';
import {Categoria, CategoriaRelations} from '../models';

export class CategoriaRepository extends DefaultCrudRepository<
  Categoria,
  typeof Categoria.prototype.Id,
  CategoriaRelations
> {
  constructor(
    @inject('datasources.facturacion') dataSource: FacturacionDataSource,
  ) {
    super(Categoria, dataSource);
  }
}
