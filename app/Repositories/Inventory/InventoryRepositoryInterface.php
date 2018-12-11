<?php
namespace App\Repositories\Inventory;
 
interface InventoryRepositoryInterface
{
    
    public function find($id);
    
    public function getAllInventory();

    public function create($requestData);

    public function update($id, $requestData);

    public function destroy($id);

    // public function getChildCategoryByBrandId($brand_id);
}
