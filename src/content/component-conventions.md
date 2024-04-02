---
title: Component Conventions
---

# Component Conventions

## Component structure:

ในการตั้งชื่อและจัดโครงสร้าง Component ใน React ควรทำตามรูปแบบดังนี้

โครงสร้างชื่อ Component

```
[Feature]|[Page/Context]|ComponentName|[Type]
```

โดยที่:

- `[Feature]` (ไม่บังคับ) ใช้จัดกลุ่ม component ตาม feature ของแอป เช่น ทุก component ที่เกี่ยวกับ "Product" อยู่ใน feature "Product"

- `[Page/Context]` (ไม่บังคับ) ใช้จัดกลุ่ม component ตามหน้าหรือ context ที่ใช้ เช่น component ในหน้า "Home" อยู่ใน "Home"

- `ComponentName` ชื่อหลักของ component ที่บ่งบอกหน้าที่ เช่น "Form", "List", "Card"

- `[Type]` (ไม่บังคับ) ชนิดพิเศษของ component เช่น "Modal", "Dropdown", "Button"

ตัวอย่าง:

- `ProductCard`

- `HomeBanner`

- `AdminDashboard`

- `UserProfileAvatarUpload`

กรณีชื่อ Component ยาวมากเกินไปสามารถย่อให้สั้นลงได้โดยใช้วิธีต่อไปนี้

### 1. รวมระดับของความลึก

ตัด component ย่อยออกแต่ยังคงใจความหลัก เช่น

`CarFormCarDetailsEquipment` => `CarFormEquipment`

`UserProfileSettingsAvatarUpload` => `UserProfileAvatarUpload`

### 2. ตัดส่วนที่ไม่จำเป็น

ตัดคำที่ซ้ำหรือไม่ได้เพิ่มความหมาย เช่น

`ProductListingComponent` => `ProductListing`

`UserManagementForm` => `UserForm`

### 3. ตัด Feature ออก

ถ้า component ใช้ข้าม feature ให้ตัดชื่อ feature นั้นทิ้ง เช่น

`EcommerceProductCard` => `ProductCard`

`SocialMediaUserProfile` => `UserProfile`
